import { getFunctionNode } from './main'
import * as vscode from 'vscode'
export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('vscode-extension-delete-function.dxb', () => {
    vscode.window.showInformationMessage('hello dxb!')
    // 删除字符
    const editor = vscode.window.activeTextEditor
    if (!editor) return
    const code = editor.document.getText()
    const index = editor.document.offsetAt(editor?.selection.active)
    const functionNode = getFunctionNode(code, index)

    if (!functionNode) return
    editor.edit((editBuilder) => {
      editBuilder.delete(new vscode.Range(new vscode.Position(functionNode.start.line - 1, functionNode.start.column), new vscode.Position(functionNode.end.line - 1, functionNode.end.column)))
    })
  })
}
